import * as React from "react";
import { cn } from "@/lib/utils";

const Timeline = React.forwardRef<
	HTMLOListElement,
	React.HTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => (
	<ol ref={ref} className={cn("flex flex-col", className)} {...props} />
));
Timeline.displayName = "Timeline";

const TimelineItem = React.forwardRef<
	HTMLLIElement,
	React.LiHTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
	<li
		ref={ref}
		className={cn("relative flex flex-col p-6 pt-0", className)}
		{...props}
	/>
));
TimelineItem.displayName = "TimelineItem";

const TimelineConnector = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			"absolute top-[5px] left-[30px] -translate-x-1/2 translate-y-2 h-full w-px bg-primary",
			className,
		)}
		{...props}
	/>
));
TimelineConnector.displayName = "TimelineConnector";

const TimelineHeader = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex items-center gap-4", className)}
		{...props}
	/>
));
TimelineHeader.displayName = "TimelineHeader";


const TimelineContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex flex-col items-start p-6 pt-0 pr-0 ml-7", className)}
		{...props}
	/>
));
TimelineContent.displayName = "TimelineContent";

export {
	Timeline,
	TimelineItem,
	TimelineConnector,
	TimelineHeader,
	TimelineContent,
};