"use server";

import { prismaApp } from "@/lib/prisma.init";
import { Task } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getTasks() {
  try {
    const tasks = await prismaApp.task.findMany({
      where: { isFinished: false },
    });
    return { tasks };
  } catch (error) {
    throw error;
  }
}

export async function getOneTask(id: string | number) {
  try {
    const task = await prismaApp.task.findUnique({
      where: {
        id: Number(id),
      },
    });
    return { task };
  } catch (error) {
    throw error;
  }
}

export async function getFinished() {
  try {
    const tasks = await prismaApp.task.findMany({
      where: {
        isFinished: true,
      },
    });
    return { tasks };
  } catch (error) {
    throw error;
  }
}

export async function createTask(data: any): Promise<any> {
  const title = await data.get("title");
  const description = await data.get("description");
  try {
    const create = await prismaApp.task.create({
      data: {
        title,
        description,
      },
    });
    revalidatePath("/");
    return redirect("/");
  } catch (error) {
    throw error;
  }
}

export async function updateTask(data: any): Promise<any> {
  const id = await data.get("id");
  const title = await data.get("title");
  const description = await data.get("description");
  const updated = Date.now();
  try {
    const create = await prismaApp.task.update({
      data: {
        title,
        description,
        updatedAt: new Date(updated),
      },
      where: {
        id: Number(id),
      },
    });
    return redirect("/");
  } catch (error) {
    throw error;
  }
}

export async function taskFinished(data: any): Promise<any> {
  const id = await data.get("id");
  const updated = Date.now();
  try {
    const create = await prismaApp.task.update({
      data: {
        isFinished: true,
        updatedAt: new Date(updated),
      },
      where: {
        id: Number(id),
      },
    });
    return redirect("/");
  } catch (error) {
    throw error;
  }
}

export async function taskUnfinished(data: any): Promise<any> {
  const id = await data.get("id");
  const updated = Date.now();
  try {
    const create = await prismaApp.task.update({
      data: {
        isFinished: false,
        updatedAt: new Date(updated),
      },
      where: {
        id: Number(id),
      },
    });
    return redirect("/selesai");
  } catch (error) {
    throw error;
  }
}

export async function deleteTask(data: any): Promise<any> {
  const id = await data.get("id");
  try {
    const del = await prismaApp.task.delete({
      where: {
        id: Number(id),
      },
    });
    revalidatePath("/");
  } catch (error) {
    throw error;
  }
}
