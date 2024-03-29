import { ButtonDefault, Feature, Text } from "../../components";
import { Features } from "../Home";

function openUrl(html) {
  window.open(html, "_blank")
 }

export function FeaturesPage () {
return (
  <Features>
    <Text textClass={'max-w-3xl'} title={<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nihil!</h1>}
    subtitle={<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis maxime eligendi exercitationem vero quas, similique nobis amet in provident laborum assumenda hic cum voluptates!</p>}>
      <ButtonDefault buttonDefaultTitle="lorem ipsum" clickEvent={() => openUrl('https://github.com/Nicitaa')}/>
    </Text>
    <Feature  featureTitle={`Get started with new universal card from us`} featureSubTitle={`lorem ipusm card dolor sit.`}
    svgUrl={`./sprite.svg#bank-card`}/>
  </Features>
)
}