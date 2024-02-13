import * as UI from "@/components/ui";

const Alert = ({
  btnTitle = "Show Dialog",
  title = "",
  description = "",
  button = "Continue",
  onClickHandle,
}: {
  btnTitle?: any;
  title?: string;
  description?: string;
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
        <UI.alertDialog.AlertDialogFooter>
          <UI.alertDialog.AlertDialogCancel>
            Cancel
          </UI.alertDialog.AlertDialogCancel>
          <UI.alertDialog.AlertDialogAction onClick={onClickHandle}>
            {button}
          </UI.alertDialog.AlertDialogAction>
        </UI.alertDialog.AlertDialogFooter>
      </UI.alertDialog.AlertDialogContent>
    </UI.alertDialog.AlertDialog>
  );
};

export default Alert;
