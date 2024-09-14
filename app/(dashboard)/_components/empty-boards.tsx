'use client';

import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useOrganization } from '@clerk/clerk-react';

export const EmptyBoards =() => {
    const { organization } = useOrganization();
    const create = useMutation(api.board.create);

    const onClick = () => {
        if (!organization) return;

        create({
          orgId:   organization.id,
          title: 'Untitled'
        });
    };

    return (
        <div className='h-full flex flex-col items-center justify-center'>
        <Image
            src='/notes.svg'
            alt='Empty'
            height={120}
            width={120}
        />
        <h2 className='text-2xl font-semibold mt-6'>
            Create you first Board!
        </h2>
        <p className="text-muted-foreground text-sm mt-2">
            Start by creating a board for your Organization.
        </p>
        <div className="mt-6 ">
            <Button onClick={onClick} size='lg'>
                Create Board
            </Button>
        </div>
        </div>
    );
};