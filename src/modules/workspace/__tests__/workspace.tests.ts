import axios from 'axios';
import { Address } from 'fuels';

import { accounts } from '@src/mocks/accounts';
import { networks, providers } from '@src/mocks/networks';
import { AuthValidations } from '@src/utils/testUtils/Auth';

describe('[User]', () => {
  let api: AuthValidations;
  beforeAll(async () => {
    api = new AuthValidations(networks['local'], accounts['USER_1']);

    await api.create();
    await api.createSession();
  });

  const generateWorkspacePayload = async () => {
    const { data: data_user1 } = await api.axios.post('/user/', {
      address: Address.fromRandom().toAddress(),
      provider: providers['local'].name,
      name: `${new Date()} - Create user test`,
    });
    const { data: data_user2 } = await api.axios.post('/user/', {
      address: Address.fromRandom().toAddress(),
      provider: providers['local'].name,
      name: `${new Date()} - Create user test`,
    });

    const { data, status } = await api.axios.post(`/workspace/`, {
      name: 'Workspace 1',
      description: 'Workspace 1 description',
      members: [data_user1.id, data_user2.id],
    });

    return { data, status, data_user1, data_user2 };
  };

  test(
    'List workspaces to user',
    async () => {
      const { data, status } = await api.axios.get(
        `/workspace/by-user/${accounts['USER_1'].address}`,
      );

      expect(status).toBe(200);
      expect(data).toBeInstanceOf(Array);

      expect(data[0]).toHaveProperty('id');
      expect(data[0]).toHaveProperty('owner');
      expect(data[0]).toHaveProperty('members');
    },
    40 * 1000,
  );

  test(
    'Create workspace',
    async () => {
      const { data, status } = await generateWorkspacePayload();

      expect(status).toBe(201);
      expect(data).toHaveProperty('id');
      expect(data).toHaveProperty('owner');
      expect(data).toHaveProperty('members');
    },
    60 * 1000,
  );

  test(
    'Find workspace by ID',
    async () => {
      const { data } = await generateWorkspacePayload();

      const { data: workspace, status: status_find } = await api.axios.get(
        `/workspace/${data.id}`,
      );

      expect(status_find).toBe(200);
      expect(workspace).toHaveProperty('id');
      expect(workspace.id).toBe(data.id);
      expect(workspace).toHaveProperty('owner');
      expect(workspace).toHaveProperty('members');
    },
    60 * 1000,
  );
});
