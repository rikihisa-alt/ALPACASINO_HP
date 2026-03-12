import { OpeningScene } from "@/components/home/OpeningScene";
import { ChapterWhatIs } from "@/components/home/ChapterWhatIs";
import { ChapterExperience } from "@/components/home/ChapterExperience";
import { ChapterBeginners } from "@/components/home/ChapterBeginners";
import { ChapterVoices } from "@/components/home/ChapterVoices";
import { ChapterVisitUs } from "@/components/home/ChapterVisitUs";
import { ClosingCTA } from "@/components/home/ClosingCTA";

export default function Home() {
  return (
    <>
      <OpeningScene />
      <ChapterWhatIs />
      <ChapterExperience />
      <ChapterBeginners />
      <ChapterVoices />
      <ChapterVisitUs />
      <ClosingCTA />
    </>
  );
}
