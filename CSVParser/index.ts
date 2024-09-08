import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class CSVParser implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private context: ComponentFramework.Context<IInputs>;
    private notifyOutputChanged: () => void;
    private container: HTMLDivElement;
    private button: HTMLButtonElement;
    private label: HTMLLabelElement;
    private flexContainer: HTMLSpanElement;
    private textContainer: HTMLSpanElement;
    private fileInput: HTMLInputElement;

    constructor(){}

    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement): void
    {
        this.context = context;
        this.notifyOutputChanged = notifyOutputChanged;
        this.container = container;

        this.button = document.createElement('button');
        this.button.className = 'ms-Button ms-Button--primary root-110';
        this.button.innerText = this.context.parameters.label.raw ?? 'Upload CSV';
        this.button.addEventListener('click', () => document.getElementById('fileInput')?.click());
        this.container.appendChild(this.button);
/*
        this.flexContainer = document.createElement('span');
        this.flexContainer.className = 'ms-Button-flexContainer flexContainer-111';
        this.button.appendChild(this.flexContainer);

        this.textContainer = document.createElement('span');
        this.textContainer.className = 'ms-Button-textContainer textContainer-112';
        this.flexContainer.appendChild(this.textContainer);
        
        this.label = document.createElement('label');
        this.label.className = 'ms-Button-label label-114';
        this.label.innerText = this.context.parameters.label.raw ?? 'Upload CSV';
        this.textContainer.appendChild(this.label);
*/
        this.fileInput = document.createElement('input');
        this.fileInput.type = 'file';
        this.fileInput.id = 'fileInput';
        this.container.appendChild(this.fileInput);
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
