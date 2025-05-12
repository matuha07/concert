import { Filters } from "@/components/shared/filters";
import { Title } from "@/components/shared/title";
import { ShowCard } from "@/components/shared/show-card";
import { ShowList } from "@/components/shared/show-list";


export default function Home() {
  return (
    <div>
      <Title>Checkout these amazing concerts in Graz.</Title>
      <div className="flex gap-4 mt-4">
        <Filters></Filters>
      </div>
      <ShowList></ShowList>

    </div>


  )
}