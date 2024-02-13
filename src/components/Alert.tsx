import * as UI from "@/components/ui";

const Alert = ({
  variant = "default",
  btnTitle = "Show Dialog",
  title = "",
  description = "",
  button = "Continue",
  onClickHandle,
}: {
  variant?: "default" | "form";
  btnTitle?: any;
  title?: string;
  description?: any;
  button?: string;
  onClickHandle?: () => void;
}) => {
  return (
    <UI.alertDialog.AlertDialog>
      <UI.alertDialog.AlertDialogTrigger asChild>
        {btnTitle}
      </UI.alertDialog.AlertDialogTrigger>
      <UI.alertDialog.AlertDialogContent>
        <UI.alertDialog.AlertDialogHeader>
          <UI.alertDialog.AlertDialogTitle>
            {title}
          </UI.alertDialog.AlertDialogTitle>
          <UI.alertDialog.AlertDialogDescription>
            {description}
          </UI.alertDialog.AlertDialogDescription>
        </UI.alertDialog.AlertDialogHeader>
        {variant == "default" ? (
          <UI.alertDialog.AlertDialogFooter>
            <UI.alertDialog.AlertDialogCancel>
              Cancel
            </UI.alertDialog.AlertDialogCancel>
            <UI.alertDialog.AlertDialogAction onClick={onClickHandle}>
              {button}
            </UI.alertDialog.AlertDialogAction>
          </UI.alertDialog.AlertDialogFooter>
        ) : (
          <UI.alertDialog.AlertDialogCancel>
            Cancel
          </UI.alertDialog.AlertDialogCancel>
        )}
      </UI.alertDialog.AlertDialogContent>
    </UI.alertDialog.AlertDialog>
  );
};

export default Alert;
