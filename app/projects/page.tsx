import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";

export const revalidate = 60;
export default async function ProjectsPage() {

	const projects = allProjects
		.filter((p) => p.published)

	return (
		<div className="relative pb-64 sm:pb-52 xl:pb-36">
			<Navigation />
			<div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Projects
					</h2>
					<p className="mt-4 text-zinc-400">
						Some of the projects are from courses and others are from my own time.
					</p>
				</div>
				<div className="w-full h-px bg-zinc-800" />

				<div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-2">
					<div className="grid grid-cols-1 gap-4">
						{projects
							.filter((_, i) => i % 2 === 0)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{projects
							.filter((_, i) => i % 2 === 1)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} />
								</Card>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}
