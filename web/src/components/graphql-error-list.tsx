import React from "react";
interface PropsType {
  errors: any[];
}
const GraphQLErrorList = ({ errors }: PropsType) => (
  <>
    <div>
      <h1>GraphQL Error</h1>
      {errors.map((error) => (
        <pre key={error.message}>{error.message}</pre>
      ))}
    </div>
  </>
);

export default GraphQLErrorList;
