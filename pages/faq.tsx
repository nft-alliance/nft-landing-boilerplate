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
        <Link href="/">
          <a>Mint page</a>
        </Link>
      </p>
      <Divider />
      <h3>Are there rewards for minting?</h3>
      <p>
        Yes, you get an NFT
      </p>
      <Divider />
      <h3>Will I have fun?</h3>
      <p>
        Yes.{" "}
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
