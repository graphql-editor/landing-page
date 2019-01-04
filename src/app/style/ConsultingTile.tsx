import { style } from "typestyle";
import { colors } from "./vars";

export const Tiles = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridGap: 10,
  padding: "30px 0"
});

export const Tile = style({
  padding: `60px 50px 60px`,
  textAlign: "center",
  boxShadow: "1px 1px 22px rgba(157, 184, 209, 0.19)",
  borderRadius: 7,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start"
});

export const NameHolder = style({
  display: "flex",
  marginBottom: 24,
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "stretch"
});
export const Name = style({
  fontSize: 24,
  letterSpacing: 2,
  fontWeight: 500,
  marginBottom: 12,
  textTransform: "uppercase",
  color: colors.pink
});

export const Image = style({
  height: 25,
  marginLeft: 10
});

export const Description = style({
  fontSize: 18,
  textAlign: "justify",
  marginBottom: 24,
  lineHeight: 2
});

export const Points = style({
  display: "flex",
  flexFlow: "column nowrap",
  textAlign: "justify",
  marginBottom:24
});

export const Point = style({
  fontSize: 16,
  lineHeight: 1.5,
  padding: `10px 0`
});
export const Actions = style({
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignSelf: "stretch"
});
