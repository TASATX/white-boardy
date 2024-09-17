'use client';

import { toast } from 'sonner';
import { useApiMutation } from '@/hooks/use-api-mutation';
import { api } from '@/convex/_generated/api';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useOrganization } from '@clerk/clerk-react';

export const EmptyBoards =() => {
    const { organization } = useOrganization();
    const { mutate, pending }= useApiMutation(api.board.create);

    const onClick = () => {
        if (!organization) return;

        mutate({
          orgId:   organization.id,
          title: 'Untitled'
        })
        .then((id) => {
            toast.success('Board created');
            // TODO: redirect to Board/(id)
        })
        .catch(() => toast.error('Failed to create board'))
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
            <Button disabled={pending} onClick={onClick} size='lg'>
                Create Board
            </Button>
        </div>
        </div>
    );
};