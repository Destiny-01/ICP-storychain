import { AuthClient } from "@dfinity/auth-client";

const authClient = await AuthClient.create();
export const IILogin = async (): Promise<string> => {
  return await new Promise((resolve, reject) => {
    const existingIdentity = authClient.getIdentity();
    if (
      existingIdentity &&
      existingIdentity.getPrincipal().toString() !== "2vxsx-fae"
    ) {
      return resolve(existingIdentity.getPrincipal().toString());
    }

    authClient.login({
      maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000),
      onSuccess: async () => {
        const identity = await authClient.getIdentity();
        resolve(identity.getPrincipal().toString());
      },
      onError: (err) => {
        reject(err);
      },
    });
  });
};

export default authClient;
