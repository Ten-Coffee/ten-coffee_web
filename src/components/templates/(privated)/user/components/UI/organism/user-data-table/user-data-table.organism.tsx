import { useUserDataTableHook } from '@/components/templates/(privated)/user/components/UI/organism/user-data-table/use-user-data-table.hook';
import { InputMolecule } from '@/components/UI/molecules/input/input.molecule';
import { TableOrganism } from '@/components/UI/organism/table/table.organism';
import { icons } from '@/icons/icons';

export const UserDataTableOrganism = () => {
  const { columns, rowActions, usersData, setPageSearch, search } =
    useUserDataTableHook();

  return (
    <>
      <InputMolecule.Text
        icon={icons.Search}
        position={'left'}
        placeholder={'Pesquisar usuário por nome'}
        onChange={(e) => setPageSearch({ search: e.target.value })}
        value={search}
      />

      <TableOrganism
        columns={columns}
        data={usersData?.content}
        rowActions={rowActions}
        totalPages={usersData?.totalPages}
        number={usersData?.number ?? 0}
      />
    </>
  );
};
