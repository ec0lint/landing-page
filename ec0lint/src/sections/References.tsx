import React from "react";
import { IReference, IReferenceObj } from "../interfaces";

export default function References(data: IReferenceObj) {

  return (
    <div style={{ marginBottom: '100px', marginTop: '30px' }}>
      <h4 className="sectionTitle">References</h4>
      <div>
        {data.data.map((x: IReference, i: number) => {
          return <ul><h6 className="sectionText">{`[${i+1}]`} <a target="_blank" rel="noreferrer"
          href={x.url} className="link">{x.text}</a>{` [Accessed on the ${x.accessed}]`}</h6></ul>
        })}
      </div>
    </div>
  );
}
