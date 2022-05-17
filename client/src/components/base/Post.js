import {
  Box,
  Heading,
  Flex,
  Text,
  Center,
  HStack,
  Divider,
} from '@chakra-ui/react';

const Post = () => {
  return (
    <Box as="article">
      <Heading as="h3" fontSize="xl">
        Beyond Good and Evil
      </Heading>
      <Flex>
        <Text fontSize="md" mr="2px">
          Posted on
        </Text>
        <Text fontWeight="500" mr="5px">
          May 16, 2022
        </Text>
        <Center>
          <Text fontSize="md" mr="2px">
            By
          </Text>
          <Text fontSize="md" fontWeight="500">
            Hades
          </Text>
        </Center>
      </Flex>
      <Text width="99%" margin="1em auto">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem,
        inventore suscipit, consequatur consequuntur placeat molestias
        necessitatibus minima illum iste voluptas eligendi exercitationem
        pariatur provident. Nobis, nostrum earum temporibus unde repudiandae,
        enim odio vel voluptate quam tempore est exercitationem! Ipsum soluta
        assumenda ea quos perferendis, quia non dicta aspernatur, ab accusantium
        aperiam maiores temporibus et vel nobis inventore dolorum odio possimus
        totam exercitationem voluptates itaque quam aut. Hic, dicta. Impedit at
        beatae esse corporis, nobis sit cupiditate praesentium laudantium
        dignissimos quidem sequi earum, tenetur porro fuga voluptatibus deleniti
        nemo a dolorem voluptates molestias ullam mollitia vel. Voluptate
        similique quos nostrum debitis. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Omnis, est iste. Alias, dolore quo, totam accusantium
        deserunt quae aperiam sapiente ut culpa perferendis adipisci itaque
        reiciendis maxime assumenda consequuntur a. Vero eaque, ex maxime
        repellendus omnis voluptatum doloribus soluta saepe debitis earum beatae
        aliquid inventore magnam totam cumque unde porro neque quis enim
        dolorem? A, aperiam possimus. Omnis nisi facere aliquid ea inventore
        aperiam temporibus iusto eius atque sed, nostrum deleniti, nemo quod,
        provident quibusdam laudantium neque suscipit voluptate quis ducimus
        modi aut mollitia molestias nam. Pariatur assumenda, eaque repellat
        veritatis reiciendis rem tenetur quaerat nostrum repellendus fugiat illo
        nam!
      </Text>
      <Divider />
    </Box>
  );
};

export default Post;
