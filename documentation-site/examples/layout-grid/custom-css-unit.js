// @flow

import * as React from 'react';
import {useStyletron} from 'baseui';
import {Grid, Cell} from 'baseui/layout-grid';

export default () => (
  <Outer>
    <Grid
      gridUnit="em"
      gridGutters={[1, 2, 2]}
      gridMargins={[1, 2, 4]}
    >
      <Cell gridUnit="em">
        <Inner>0</Inner>
      </Cell>
      <Cell gridUnit="em">
        <Inner>2</Inner>
      </Cell>
      <Cell gridUnit="em">
        <Inner>3</Inner>
      </Cell>
      <Cell gridUnit="em">
        <Inner>4</Inner>
      </Cell>
      <Cell gridUnit="em">
        <Inner>5</Inner>
      </Cell>
      <Cell gridUnit="em">
        <Inner>6</Inner>
      </Cell>
      <Cell gridUnit="em">
        <Inner>7</Inner>
      </Cell>
      <Cell gridUnit="em">
        <Inner>8</Inner>
      </Cell>
      <Cell gridUnit="em">
        <Inner>9</Inner>
      </Cell>
      <Cell gridUnit="em">
        <Inner>10</Inner>
      </Cell>
      <Cell gridUnit="em">
        <Inner>11</Inner>
      </Cell>
      <Cell gridUnit="em">
        <Inner>12</Inner>
      </Cell>
    </Grid>
  </Outer>
);

const Outer: React.StatelessFunctionalComponent<{
  children: React.Node,
}> = ({children}) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        background: theme.colors.accent100,
      })}
    >
      {children}
    </div>
  );
};

const Inner: React.StatelessFunctionalComponent<{
  children: React.Node,
}> = ({children}) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: theme.colors.accent200,
        color: theme.colors.accent700,
        padding: '.25rem',
      })}
    >
      {children}
    </div>
  );
};