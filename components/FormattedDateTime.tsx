import { cn, formatDateTime } from "@/lib/utils";
import React from "react";

const FormattedDateTime = ({
  dateTime,
  className,
}: {
  dateTime: string;
  className?: string;
}) => {
  return (
    <p className={cn("body-1 text-light-200", className)}>
      {formatDateTime(dateTime)}
    </p>
  );
};

export default FormattedDateTime;
