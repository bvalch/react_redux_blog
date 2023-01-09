import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ timestamp }) => {
    console.log(parseISO(timestamp))
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp)
    // console.log(date)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `${timePeriod} ago`
  }
  return (
    <span title={timestamp}>
       <i>{timeAgo}</i>
    </span>
  );
};
export default TimeAgo;
