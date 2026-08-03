import { createContext, type ComponentProps, useContext } from 'react';

import { useIsMobile } from '@/hooks/use-mobile';

import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

const BREAKPOINT = 640;

const MobileContext = createContext(false);
const useMobileCtx = () => useContext(MobileContext);

export const ResponsiveDrawer = ({
  ...props
}: Overwrite<ComponentProps<typeof Dialog>, ComponentProps<typeof Drawer>>) => {
  const mobile = useIsMobile(BREAKPOINT);
  return (
    <MobileContext.Provider value={mobile}>
      {mobile ? <Drawer {...props} /> : <Dialog {...props} />}
    </MobileContext.Provider>
  );
};

export const ResponsiveDrawerTrigger = ({
  ...props
}: ComponentProps<typeof DrawerTrigger | typeof DialogTrigger>) =>
  useMobileCtx() ? (
    <DrawerTrigger {...props} />
  ) : (
    <DialogTrigger {...props} />
  );

export const ResponsiveDrawerPortal = (
  props: ComponentProps<typeof DrawerPortal | typeof DialogPortal>
) =>
  useMobileCtx() ? (
    <DrawerPortal {...props} />
  ) : (
    <DialogPortal {...props} />
  );

export const ResponsiveDrawerClose = (
  props: ComponentProps<typeof DrawerClose | typeof DialogClose>
) =>
  useMobileCtx() ? (
    <DrawerClose {...props} />
  ) : (
    <DialogClose {...props} />
  );

export const ResponsiveDrawerOverlay = (
  props: ComponentProps<typeof DrawerOverlay | typeof DialogOverlay>
) =>
  useMobileCtx() ? (
    <DrawerOverlay {...props} />
  ) : (
    <DialogOverlay {...props} />
  );

export const ResponsiveDrawerContent = ({
  hideCloseButton,
  ...props
}: Omit<
  ComponentProps<typeof DialogContent | typeof DrawerContent>,
  'render' | 'className'
> & {
  render?: React.ReactElement;
  className?: string;
  hideCloseButton?: boolean;
}) =>
  useMobileCtx() ? (
    <DrawerContent {...(props as ComponentProps<typeof DrawerContent>)} />
  ) : (
    <DialogContent
      hideCloseButton={hideCloseButton}
      {...(props as ComponentProps<typeof DialogContent>)}
    />
  );

export const ResponsiveDrawerHeader = (
  props: ComponentProps<typeof DrawerHeader | typeof DialogHeader>
) =>
  useMobileCtx() ? (
    <DrawerHeader {...props} />
  ) : (
    <DialogHeader {...props} />
  );

export const ResponsiveDrawerBody = (
  props: ComponentProps<typeof DrawerBody | typeof DialogBody>
) =>
  useMobileCtx() ? (
    <DrawerBody {...props} />
  ) : (
    <DialogBody {...props} />
  );

export const ResponsiveDrawerFooter = (
  props: ComponentProps<typeof DrawerFooter | typeof DialogFooter>
) =>
  useMobileCtx() ? (
    <DrawerFooter {...props} />
  ) : (
    <DialogFooter {...props} />
  );

export const ResponsiveDrawerTitle = (
  props: ComponentProps<typeof DrawerTitle | typeof DialogTitle>
) =>
  useMobileCtx() ? (
    <DrawerTitle {...props} />
  ) : (
    <DialogTitle {...props} />
  );

export const ResponsiveDrawerDescription = (
  props: ComponentProps<typeof DrawerDescription | typeof DialogDescription>
) =>
  useMobileCtx() ? (
    <DrawerDescription {...props} />
  ) : (
    <DialogDescription {...props} />
  );
