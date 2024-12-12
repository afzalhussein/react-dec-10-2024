import { toTitleCase } from "./utility";
export function Comment({ comment }) {
  return <>{comment && toTitleCase(comment)}</>;
}
