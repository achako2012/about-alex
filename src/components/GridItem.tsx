import { Box, LinkBox, Image, LinkOverlay, Text, Button } from '@chakra-ui/react';
import React from 'react';

interface GridItemProps {
    href: string;
    thumbnail: string;
    title: string;
}

interface GridArticleItemProps {
    id: string;
    thumbnail: string;
    title: string;
    showControls?: boolean;
    onDelete: (id: string) => void;
}

export const GridItem = ({ href, thumbnail, title }: GridItemProps) => (
    <Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
            <Image
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
                loading="lazy"
                borderRadius="md"
            />
            <LinkOverlay href={href} target="_blank" style={{ color: 'inherit' }}>
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
        </LinkBox>
    </Box>
);

export const GridArticleItem = ({
    id,
    thumbnail,
    title,
    showControls,
    onDelete
}: GridArticleItemProps) => {
    const controls = () => <Button onClick={() => onDelete(id)}> Delete </Button>;

    return (
        <Box w="100%" textAlign="center">
            <LinkBox cursor="pointer">
                <Image
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                    loading="lazy"
                    borderRadius="md"
                />
                <LinkOverlay href={`articles/${id}`} style={{ color: 'inherit' }}>
                    <Text mt={2}>{title}</Text>
                </LinkOverlay>
            </LinkBox>
            {showControls ? controls() : ''}
        </Box>
    );
};
