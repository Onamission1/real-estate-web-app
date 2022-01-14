import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

//Property Components
import Property from "../components/Property";

//Rapid Api
import { baseUrl, fetchApi } from "../utilities/fetchApi";

//Reuseable Components
const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" align="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="ad banner" />
    <Box p="5">
      <Text color="blue.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button fontSize="x1" bg="blue.300" color="white">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

//Banner Setup
export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <Box>
      {/* Banner 1 */}
      <Banner
        purpose="RENT A HOUSE"
        title1="Easy rentals for"
        title2="Everyone"
        desc1="Explore apartment, Villas, Homes"
        desc2="and more"
        buttonText="Explore Rentals"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4
      "
      />

      {/* Fetch and Map the properties For Rent */}
      <Flex flexWrap="wrap">
        {propertiesForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>

      {/* Banner 2 */}
      <Banner
        purpose="BUY A HOUSE"
        title1="Find, Buy & Own Your"
        title2="Dream Home"
        desc1="Explore apartment, Villas, Homes"
        desc2="and more"
        buttonText="Explore Sale"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4
      "
      />

      {/* Fetch and Map the properties For Sale */}
      <Flex flexWrap="wrap">
        {propertiesForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
