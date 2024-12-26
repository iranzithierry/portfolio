import { Card } from "../ui/card";
import { languages } from "@/resources/data";

export default function LanguageSection() {
    return (
        <Card>
            <Card.Header>
                <Card.Title>Languages</Card.Title>
            </Card.Header>
            <Card.Content className="space-y-1.5">
                {languages.map((language) => (
                    <div key={language.name.toLowerCase()} className="flex items-center gap-2">
                        <h4 className="font-bold text-sm">
                            <span className="mr-1">{language.flag}</span>
                            {language.name}
                        </h4>
                    </div>
                ))}
            </Card.Content>
        </Card>
    )
}