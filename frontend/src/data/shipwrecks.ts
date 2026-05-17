export interface ShipwreckDetail {
    name: string;
    vesselType: string;
    length: string;
    mainDeckDepth?: string;
    hullDepth?: string;
    minDepth?: string;
    maxDepth: string;
    requiredLevel: string;
    sunk?: string;
    padiUrl?: string;
    latitude: number;
    longitude: number;
    coordinateNote?: string;
    description: string[];
}

export interface ShipwreckImageCard {
    slug: string;
    src: string;
    alt: string;
}

const shipwreckImageModules = import.meta.glob('../assets/shipwrecks/*.{png,jpg,jpeg,webp}', { eager: true });

export const shipwreckDisplayOrder = [
    'akitsushima',
    'okikawa-maru',
    'kyokuzan-maru',
    'olympia-maru',
    'irako',
    'kogyo-maru',
    'nanshin-maru',
    'morazan-maru',
    'lusong-gun-boat',
    'teru-kaze-maru',
];

export const shipwreckDetailsBySlug: Record<string, ShipwreckDetail> = {
    'akitsushima': {
        name: 'Akitsushima',
        vesselType: 'Seaplane Tender of the Imperial Japanese Navy Combined Fleet in WWII',
        length: '118 meters',
        hullDepth: '22 meters',
        maxDepth: '36 meters',
        requiredLevel: 'Advanced Open Water',
        sunk: 'September 24, 1944 by U.S. Air Raid',
        padiUrl: 'https://www.padi.com/dive-site/philippines/akitsushima/',
        latitude: 11.98710,
        longitude: 119.97353,
        description: [
            'The Akitsushima is a large warship that is positioned on her port side. She was suddenly hit towards the stern, where the flying boat was resting on the metal tracks, and quickly sank.',
            'The ship was almost ripped apart. Only half of the metal on the ship\'s starboard side and half of the metal on the ship\'s bottom saved the stern from separating from the rest of the ship.',
            'The crane used to lift the seaplane out of the water is still in place. The crane is laying on the sandy bottom, attracting schools of huge batfish and barracudas. A 3-barreled AA (anti-aircraft) gun installation remains at the front of the flying boat tracks.',
        ],
    },
    'okikawa-maru': {
        name: 'Okikawa Maru',
        vesselType: 'Auxiliary Oiler of the Imperial Japanese Navy Combined Fleet in WWII',
        length: '160 meters',
        mainDeckDepth: '16 meters',
        maxDepth: '26 meters',
        requiredLevel: 'Advanced Open Water',
        sunk: 'September 24, 1944 by U.S. Air Raid',
        latitude: 12.01056,
        longitude: 119.58171,
        description: [
            'The largest shipwreck in Coron Bay.',
            'It sustained massive damage from the U.S. air attacks, burned for nearly 3 weeks, and eventually sank after a further attack in October that same year.',
        ],
    },
    'kyokuzan-maru': {
        name: 'Kyokuzan Maru',
        vesselType: 'Auxiliary Supply Ship of the Imperial Japanese Army',
        length: '130 meters',
        mainDeckDepth: '25 meters',
        maxDepth: '43 meters',
        requiredLevel: 'Advanced Open Water',
        sunk: 'September 24, 1944 by U.S. Air Raid',
        latitude: 12.030,
        longitude: 120.010,
        coordinateNote: 'Approximate coordinates',
        description: [
            'Located near a small islet called Dimalanta at the north coast of Busuanga, she was with another 2 cargo ships during the U.S. air raid, which obviously managed to escape.',
            'The ship was hit on port side after three or four very near misses. However, the vessel did not sink due to bombing damage. Hull, cargo holds, as well as engine room are still intact and lifeboat davits have been swung out.',
            'It is assumed that the crew scuttled and abandoned the ship later on.',
        ],
    },
    'olympia-maru': {
        name: 'Olympia Maru',
        vesselType: 'Auxiliary Cargo Ship of the Imperial Japanese Army in WWII',
        length: '122 meters',
        mainDeckDepth: '22 meters',
        maxDepth: '30 meters',
        requiredLevel: 'Advanced Open Water',
        sunk: 'September 24, 1944 by U.S. Air Raid',
        padiUrl: 'https://www.padi.com/dive-site/philippines/olympia-maru/',
        latitude: 11.97073,
        longitude: 120.06125,
        description: [
            'This shipwreck is another source of debate over her origin. Originally and most commonly known as Tangat Wreck due to its close proximity to Tangat Island, it may be either Olympia or Taei Maru.',
            'The ship is a freighter, and if indeed it is Olympia Maru, it was built for Mitsubishi Shoji Kaisha Ltd. and later used during WWII by the Japanese Imperial fleet.',
            'Originally powered by steam engines, she was upgraded to two-stroke, six cylinder engines during the 1930s.',
        ],
    },
    'irako': {
        name: 'Irako',
        vesselType: 'Provision Ship of the Imperial Japanese Navy Combined Fleet in WWII',
        length: '130 meters',
        mainDeckDepth: '18 meters',
        maxDepth: '36 meters',
        requiredLevel: 'Advanced Open Water with at least 30 dives',
        sunk: 'September 24, 1944 by U.S. Air Raid',
        padiUrl: 'https://www.padi.com/dive-site/philippines/irako-2/',
        latitude: 11.96821,
        longitude: 120.04027,
        description: [
            'Irako Maru was a refrigerated provision ship built in 1937 to support extended fleet operations and was able to supply food for 25,000 personnel for two weeks.',
            'She sustained multiple hits on the upper deck amidships, caught fire, and sank slowly with many casualties.',
        ],
    },
    'kogyo-maru': {
        name: 'Kogyo Maru',
        vesselType: 'Imperial Japanese Navy Auxiliary Cargo Ship',
        length: '130 meters',
        hullDepth: '18 meters',
        maxDepth: '36 meters',
        requiredLevel: 'Advanced Open Water',
        sunk: 'September 24, 1944 by U.S. Air Raid',
        padiUrl: 'https://www.padi.com/dive-site/philippines/kogyo-maru/',
        latitude: 11.98034,
        longitude: 120.03984,
        description: [
            'The Kogyo Maru was a Japanese freighter carrying construction materials for building a runway for the Japanese war effort in the Pacific.',
            'Kogyo Maru\'s second hold contains an incline of cement bags which tumbled as the ship sank. Complete but encrusted, you can imagine the operator sitting in the seat and working the control levers to carve a runway out of a tropical island.',
            'Engrossed in the bulldozer, you might fail to look up the incline of cement sacks and so miss the tractor and air compressor perched above it.',
        ],
    },
    'nanshin-maru': {
        name: 'Nanshin Maru',
        vesselType: 'Coastal Oiler',
        length: '45 meters',
        mainDeckDepth: '22 meters',
        maxDepth: '35 meters',
        requiredLevel: 'Advanced Open Water',
        latitude: 12.050,
        longitude: 119.950,
        coordinateNote: 'Approximate coordinates',
        description: [
            'A small tanker converted to carry specific fuel (gasoline, lube oil, etc.) in small isolated tanks for replenishment of land-based depots.',
        ],
    },
    'morazan-maru': {
        name: 'Morazan Maru',
        vesselType: 'Auxiliary Supply Ship of the Imperial Japanese Army',
        length: '100 meters',
        hullDepth: '14 meters',
        maxDepth: '25 meters',
        requiredLevel: 'Open Water',
        sunk: 'September 24, 1944 by U.S. Air Raid',
        padiUrl: 'https://www.padi.com/dive-site/philippines/ekkai-maru/',
        latitude: 11.98819,
        longitude: 120.03735,
        description: [
            'It was an English-built freighter in 1908, seized in Shanghai in 1941 and put to use as an auxiliary vessel.',
            'Some speculation exists that it is very similar to Taei Maru that was sunk in Manila Bay. Even Japanese war records were confused in identification because up to 6 freighters were named Taei Maru during the course of war.',
            'Either way, one lies in Manila Bay and the other in Coron.',
        ],
    },
    'lusong-gun-boat': {
        name: 'Lusong Gun Boat',
        vesselType: 'Coastal Vessel',
        length: '30 meters',
        maxDepth: '10-12 meters',
        requiredLevel: 'DSD and Open Water',
        padiUrl: 'https://www.padi.com/dive-site/philippines/lusong-gunboat/',
        latitude: 11.97080,
        longitude: 120.02468,
        description: [
            'It is one of the wrecks that can be seen by snorkeling and is ideal for Open Water divers because of its shallow depth.',
            'It is pretty easy to navigate.',
        ],
    },
    'teru-kaze-maru': {
        name: 'Teru Kaze Maru',
        vesselType: 'Presumed Auxiliary Anti-Submarine Craft and Tugboat of the Imperial Japanese Navy Combined Fleet',
        length: '30 meters',
        minDepth: '4 meters',
        maxDepth: '20 meters',
        requiredLevel: 'DSD and Open Water',
        sunk: 'September 24, 1944',
        padiUrl: 'https://www.padi.com/dive-site/philippines/teru-kaze/',
        latitude: 11.97429,
        longitude: 120.07957,
        description: [
            'Also known as the East Tangat Wreck due to her close proximity to the east shore of Tangat Island, her original Japanese name is Terukaze.',
            'The crew of this boat most likely scuttled it after the air raid because it is so close to the shore and there are no big damages.',
            'Together with Lusong Gun Boat, it was one of the easiest wrecks of this fleet for locals as well as for commercial salvage companies (and later on for divers) to salvage valuable items from.',
        ],
    },
};

export const shipwreckFeatureCards: ShipwreckImageCard[] = Object.entries(shipwreckImageModules)
    .map(([filePath, module]) => {
        const fileName = filePath.split('/').pop() ?? '';
        const slug = fileName.replace(/\.[^/.]+$/, '');
        return {
            slug,
            src: (module as { default: string }).default,
            alt: `${slug.replace(/-/g, ' ')} shipwreck profile image`,
        };
    })
    .sort((first, second) => {
        const firstIndex = shipwreckDisplayOrder.indexOf(first.slug);
        const secondIndex = shipwreckDisplayOrder.indexOf(second.slug);

        if (firstIndex === -1 && secondIndex === -1) {
            return first.slug.localeCompare(second.slug);
        }
        if (firstIndex === -1) {
            return 1;
        }
        if (secondIndex === -1) {
            return -1;
        }
        return firstIndex - secondIndex;
    });

export const getPadiUrlForShip = (slug: string, ship: ShipwreckDetail) => {
    if (ship.padiUrl) {
        return ship.padiUrl;
    }

    return `https://www.padi.com/dive-site/philippines/${slug}/`;
};
