import { useState } from "react";
interface Structure {
  name: string;
  files?: string[];
  folders?: Structure[];
}

const Unfold: React.FC<{ args: Structure }> = ({ args }): any => {
  const [expand, setExpand] = useState(false);
  if (args.name) {
    return (
      <>
        {/* forlder names */}
        <li
          style={{ color: "red", listStyle: "none" }}
          onClick={() => setExpand(!expand)}
        >
          {args.name}
          <br />
        </li>

        <ul style={{ display: expand ? "block" : "none" }}>
          {args?.folders?.map((el: any) => (
            <Unfold key={el.name} args={el} />
          ))}
          {args?.files?.map((val) => (
            <li key={val}>{val}</li>
          ))}
        </ul>
      </>
    );
  } else return <li>{args.name}</li>; // file names
};

export default Unfold;
