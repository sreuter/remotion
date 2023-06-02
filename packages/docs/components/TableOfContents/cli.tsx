import React from "react";
import { Grid } from "./Grid";
import { TOCItem } from "./TOCItem";

export const TableOfContents: React.FC = () => {
  return (
    <div>
      <Grid>
        <TOCItem link="/docs/cli/studio">
          <strong>studio</strong>
          <div>Start the Remotion Studio</div>
        </TOCItem>
        <TOCItem link="/docs/cli/render">
          <strong>render</strong>
          <div>Render video or audio</div>
        </TOCItem>
        <TOCItem link="/docs/cli/still">
          <strong>still</strong>
          <div>Render a still image</div>
        </TOCItem>
        <TOCItem link="/docs/cli/compositions">
          <strong>compositions</strong>
          <div>List available compositions</div>
        </TOCItem>
        <TOCItem link="/docs/lambda/cli">
          <strong>lambda</strong>
          <div>Control Remotion Lambda</div>
        </TOCItem>
        <TOCItem link="/docs/cli/benchmark">
          <strong>benchmark</strong>
          <div>Measure and optimize render time</div>
        </TOCItem>
        <TOCItem link="/docs/cli/versions">
          <strong>versions</strong>
          <div>List and validate Remotion package versions</div>
        </TOCItem>
        <TOCItem link="/docs/cli/upgrade">
          <strong>upgrade</strong>
          <div>Upgrade to a newer version</div>
        </TOCItem>
        <TOCItem link="/docs/cli/help">
          <strong>help</strong>
          <div>Show CLI commands</div>
        </TOCItem>
      </Grid>
    </div>
  );
};
