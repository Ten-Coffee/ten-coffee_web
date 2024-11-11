import { usePathname, useRouter } from 'next/navigation';

export const useBuildingBlockHook = () => {
  const navigate = useRouter();
  const pathname = usePathname();

  const navigateToLink = (path: string) => navigate.push(path);

  const thisBuildingBlockIsActive = (buildingBlockPath: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, path] = pathname.split('/');

    return buildingBlockPath === `/${path}`;
  };

  return {
    navigateToLink,
    thisBuildingBlockIsActive
  };
};
