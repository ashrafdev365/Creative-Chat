import { Signup } from "../Forms/Signup";

export const Model = ({ model, setmodel }) => {
  return (
    <>
      {model && (
        <div className="model">
          <Signup setmodel={setmodel} />
        </div>
      )}
    </>
  );
};
