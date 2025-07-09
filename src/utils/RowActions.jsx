import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { FaEye, FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";
import { Button } from "../components/ui/button";

export function RowActions({
  id,
  onEdit,
  onView,
  onDelete,
  entityName = "item",
}) {
  return (
    <AlertDialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 border-none outline-none ring-0 focus:ring-0 focus:outline-none"
            aria-label={`Actions for ${entityName}`}
          >
            <FiMoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="flex w-32 justify-center items-center">
          {onEdit && (
            <DropdownMenuItem onClick={() => onEdit(id)}>
              <FaPencilAlt className="mr-2 h-3 w-3 text-green-500" />
              Edit
            </DropdownMenuItem>
          )}
          {onView && (
            <DropdownMenuItem onClick={() => onView(id)}>
              <FaEye className="mr-2 h-3 w-3 text-blue-500" />
              View
            </DropdownMenuItem>
          )}
          {onDelete && (
            <AlertDialogTrigger asChild>
              <div onClick={(e) => e.stopPropagation()}>
                <DropdownMenuItem
                  onSelect={(e) => e.preventDefault()} // prevent menu auto close
                >
                  <MdDelete className="mr-2 h-3 w-3 text-red-500" />
                  Delete
                </DropdownMenuItem>
              </div>
            </AlertDialogTrigger>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            You want to delete {entityName}?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>
            <Button variant="white-btn">Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction onClick={() => onDelete?.(id)}>
            <Button variant="green-btn">Yes, Delete</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
