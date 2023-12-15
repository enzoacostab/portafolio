import type { Project } from "@/.contentlayer/generated";
import Image from "next/image";
import Link from "next/link";

type Props = {
	project: Project;
};

export const Article: React.FC<Props> = ({ project }) => {
	return (
		<article className="p-4 md:p-8 flex gap-4 flex-col">
			<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
				{project.title}
			</h2>
			{project.img 
				? <div className="bg-zinc-700 rounded-lg p-5 flex items-center justify-center">
						<Image src={project.img} height={1020} width={1920} className="self-center rounded-md shadow-lg border border-gray-700" alt="project image"/>
					</div> 
				: null}
			{project.description 
				? <p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
						{project.description}
					</p>
				: null}
			<div className="flex gap-3">
				<Link href={`https://github.com/${project.repository}`} className="duration-200 text-zinc-400 hover:text-zinc-100">Repository</Link>
				<Link href={project.url} className="duration-200 text-zinc-400 hover:text-zinc-100">Demo</Link>
			</div>
		</article>
	);
};
