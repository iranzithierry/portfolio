import { Card } from "../ui/card";
import { tools } from "@/resources/data";

export default function ToolsSection() {
    return (
        <Card>
            <Card.Header>
                <Card.Title>Tools I know</Card.Title>
            </Card.Header>
            <Card.Content className="space-y-1.5">
                {tools.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                        <div className="w-4 h-0.5 rounded-sm bg-primary" />
                        <h4 className="font-bold text-sm">{skill}</h4>
                    </div>
                ))}
            </Card.Content>
        </Card>
    )
}