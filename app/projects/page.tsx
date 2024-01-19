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
		<div className="relative pb-64 sm:pb-64 2xl:pb-36">
			<Navigation />
			<div className="px-6 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 pt-64 2xl:pt-40">

				<div className="grid grid-cols-1 gap-10 mx-auto lg:mx-0 md:grid-cols-2">
					<div className="grid grid-cols-1 gap-10">
						{projects
							.filter((_, i) => i % 2 === 0)
							.map((project) => (
								<Card key={project.slug} animation>
									<Article project={project} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-10">
						{projects
							.filter((_, i) => i % 2 === 1)
							.map((project) => (
								<Card key={project.slug} animation>
									<Article project={project} />
								</Card>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}
