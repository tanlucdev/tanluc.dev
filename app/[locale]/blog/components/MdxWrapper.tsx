import { useMDXComponent } from "next-contentlayer/hooks";

import CustomImage from "@/app/[locale]/blog/components/Image";
import Link from "@/app/components/Link";
import LinkPreview from "./mdx/LinkPreview";
import SeriesCollapsible from "./mdx/SeriesCollapsible";

interface CustomLinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > { }

const CustomLink: React.FC<CustomLinkProps> = (props) => {
  const href = props?.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link {...props} href={href} underline>
        {props.children}
      </Link>
    );
  }
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="font-normal underline underline-offset-4 text-link"
      {...props}
    />
  );
};

const components = {
  Image: CustomImage,
  a: CustomLink,
  Link: CustomLink,
  LinkPreview: LinkPreview,
  SeriesCollapsible: SeriesCollapsible,
};

export default function MdxWrapper({ code }: { code: string }) {
  const Component = useMDXComponent(code, { components });

  return <Component components={components} />;
}
