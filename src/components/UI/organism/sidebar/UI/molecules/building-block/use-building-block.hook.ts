import { usePathname, useRouter } from 'next/navigation';

export const useBuildingBlockHook = () => {
  const navigate = useRouter();
  const pathname = usePathname();

  const navigateToLink = (path: string) => navigate.push(path);

  const thisBuildingBlockIsActive = (buildingBlockPath: string) =>
    buildingBlockPath === pathname;

  return {
    navigateToLink,
    thisBuildingBlockIsActive
  };
};
