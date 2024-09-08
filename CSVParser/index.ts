import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class CSVParser implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private context: ComponentFramework.Context<IInputs>;
    private notifyOutputChanged: () => void;
    private container: HTMLDivElement;
    private button: HTMLButtonElement;

    constructor(){}

    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement): void
    {
        this.context = context;
        this.notifyOutputChanged = notifyOutputChanged;
        this.container = container;

        this.button = document.createElement('button');
        this.button.innerText = this.context.parameters.label.raw ?? 'Upload CSV';
    }


    public updateView(context: ComponentFramework.Context<IInputs>): void
    {
        // Add code to update control view
    }

    public getOutputs(): IOutputs
    {
        return {};
    }

    public destroy(): void
    {
        // Add code to cleanup control if necessary
    }
}
