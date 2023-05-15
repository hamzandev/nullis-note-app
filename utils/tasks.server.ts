"use server"

import {prismaApp} from "@/lib/prisma.init"
import {Task} from "@prisma/client"

export async function getTasks() {
	try {
		const tasks = await prismaApp.task.findMany();
		return {tasks}
	} catch (error) {
		throw error;	
	}
}

export async function createTask(data: any) {
	const title = data.get('title')
	const description = data.get('description')
	try {
		prismaApp.task.create({data: {
			title,
			description
		}})
	} catch (error) {
		throw error;
	}

}