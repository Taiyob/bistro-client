import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div className="text-3xl">
      <sapn>Hi, welcome</sapn>
      {user?.displayName ? user?.displayName : "Back"}
    </div>
  );
};

export default UserHome;
