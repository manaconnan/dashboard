import { useTableContext } from "../../table-context";
import { useWeb3 } from "@3rdweb-sdk/react";
import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { NFTMetadataOwner } from "@thirdweb-dev/sdk";
import React from "react";
import { MdDriveFileMoveOutline } from "react-icons/md";
import { Row } from "react-table";

interface IOwnerListAndTransferCellProps {
  row: Row<NFTMetadataOwner>;
}

export const OwnerListAndTransferCell: React.FC<
  IOwnerListAndTransferCellProps
> = ({ row }) => {
  const { address } = useWeb3();
  const tableContext = useTableContext();
  const isOwner =
    "owner" in row.original ? row.original.owner === address : false;
  if (!isOwner) {
    return null;
  }
  return (
    <>
      <Button
        onClick={() =>
          tableContext.expandRow({
            tokenId: row.original.metadata.id.toString(),
            type: "transfer",
          })
        }
        leftIcon={<Icon as={MdDriveFileMoveOutline} />}
      >
        Transfer
      </Button>
    </>
  );
};
