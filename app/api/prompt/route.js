import Prompt from "@models/prompt";
import User from "@models/User";
import { connectToDb } from "@utils/database";

export const GET = async (request,{params}) => {
    try {
        await connectToDb()

        const prompts = await Prompt.find({}).populate('creator')

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response(`Failed to fetch all prompts ${error}`, { status: 500 })
    }
} 