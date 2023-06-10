'use client';

import { UserGroupIcon } from '@heroicons/react/24/outline';
import { useRole } from '../../contexts/RoleContext';
import ProjectCard from './ProjectCard';
import { useProjects } from '../../contexts/ProjectContext';

function ProjectList() {
  const { role } = useRole();
  const { projects } = useProjects();

  return (
    <ul className="divide-y divide-white/5">
      {projects?.length === 0 && (
        <li className="relative space-x-4 px-4 py-4 sm:px-6 lg:px-8 text-white mt-10">
          <div className="text-center flex-col justify-center items-center">
            {role === 'po' ? (
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
              </svg>
            ) : (
              <UserGroupIcon className="mx-auto h-12 w-12 text-gray-400" />
            )}
            <h3 className="mt-2 text-sm font-semibold text-white">No Projects</h3>
            <p className="mt-1 text-sm text-gray-400">
              Get started by
              {' '}
              {role === 'po' ? 'creating a new project.' : 'connecting with projects.'}
            </p>
          </div>
        </li>
      )}
      {
        projects?.map((project: any) => (
          <ProjectCard project={project} key={Math.random()} />
        ))
      }
    </ul>
  );
}

export default ProjectList;
