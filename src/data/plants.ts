import { type CollectionEntry, getCollection } from 'astro:content';

export type ItemWithCount = [string, number];

export const getAllPlants = async () => {
    return await getCollection('plants', ({ data }) => {
        return import.meta.env.PROD ? data.isPublished !== false : true;
    });
};

export const sortPlantsByDate = (plants: Array<CollectionEntry<'plants'>>) => {
    return plants.sort(
        (a, b) => b.data.createdAt.valueOf() - a.data.createdAt.valueOf()
    );
};
