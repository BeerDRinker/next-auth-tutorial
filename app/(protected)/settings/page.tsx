import { auth, signOut } from "@/GET";

const SettingsPage = async () => {
  const session = await auth();
  const logout = async () => {
    "use server";

    await signOut();
  };

  return (
    <div>
      {JSON.stringify(session)}
      <form action={logout}>
        <button type="submit">Sign out</button>
      </form>
    </div>
  );
};

export default SettingsPage;
