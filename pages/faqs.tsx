import { Layout } from "../modules/app/components/Layout";
import Link from "next/link";
import { Divider } from "../modules/app/components/Divider";
export default function GalleryPage() {
  return (
    <Layout>
      <h2>FAQS</h2>
      <h3>How can I mint?</h3>
      <p>
        You can get a random mint from our{" "}
        <Link href="/mint">
          <a>Mint page</a>
        </Link>
      </p>
      <Divider />
      <h3>Are there rewards for winning?</h3>
      <p>
        At the beginning the game will use an off-chain points system. The team
        will work in the future on an onchain tokenized reward system.
      </p>
      <Divider />
      <h3>Will the game have great graphics?</h3>
      <p>
        No, the game will have simple graphics to display the combat results.{" "}
      </p>
      <Divider />
      <p>
        If you have any other problem or question, please, refer to our{" "}
        <a
          title="Join discord"
          href="https://discord.gg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord
        </a>
        .
      </p>
      
    </Layout>
  );
}
