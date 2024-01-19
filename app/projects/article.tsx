import type { Project } from "@/.contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

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
				? <Image src={project.img} height={1020} width={1920} className="self-center border-zinc-700 border rounded-md" alt="project image"/>
				: null}
			{project.description 
				? <p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
						{project.description}
					</p>
				: null}
			<div className="flex gap-5">
				<Link target="_blank" href={project.repository} className="duration-200 text-zinc-400 hover:text-zinc-100 flex gap-1 items-center"><Github size={15}/> Repositorio</Link>
				<Link target="_blank" href={project.url} className="duration-200 text-zinc-400 hover:text-zinc-100 flex gap-1 items-center"><ExternalLink size={15}/>Demo</Link>
			</div>
		</article>
	);
};
