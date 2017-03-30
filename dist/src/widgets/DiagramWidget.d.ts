/// <reference types="react" />
import * as React from "react";
import { DiagramEngine } from "../DiagramEngine";
import { DiagramModel } from "../DiagramModel";
import { BaseModel, BaseModelListener } from "../Common";
export interface SelectionModel {
    model: BaseModel<BaseModelListener>;
    initialX: number;
    initialY: number;
}
export declare class BaseAction {
    mouseX: number;
    mouseY: number;
    ms: number;
    constructor(mouseX: number, mouseY: number);
}
export declare class SelectingAction extends BaseAction {
    mouseX2: number;
    mouseY2: number;
    constructor(mouseX: number, mouseY: number);
    containsElement(x: number, y: number, diagramModel: DiagramModel): boolean;
}
export declare class MoveCanvasAction extends BaseAction {
    initialOffsetX: number;
    initialOffsetY: number;
    constructor(mouseX: number, mouseY: number, diagramModel: DiagramModel);
}
export declare class MoveItemsAction extends BaseAction {
    selectionModels: SelectionModel[];
    moved: boolean;
    constructor(mouseX: number, mouseY: number, diagramEngine: DiagramEngine);
}
export interface DiagramProps {
    diagramEngine: DiagramEngine;
    allowLooseLinks?: boolean;
    allowCanvasTranslation?: boolean;
    allowCanvasZoom?: boolean;
    actionStartedFiring?: (action: BaseAction) => boolean;
    actionStillFiring?: (action: BaseAction) => void;
    actionStoppedFiring?: (action: BaseAction) => void;
}
export interface DiagramState {
    action: BaseAction | null;
    renderedNodes: boolean;
    windowListener: any;
    diagramEngineListener: any;
}
/**
 * @author Dylan Vorster
 */
export declare class DiagramWidget extends React.Component<DiagramProps, DiagramState> {
    static defaultProps: DiagramProps;
    constructor(props: DiagramProps);
    componentWillMount(): void;
    componentWillUnmount(): void;
    componentWillUpdate(nextProps: DiagramProps): void;
    componentDidUpdate(): void;
    componentDidMount(): void;
    /**
     * Gets a model and element under the mouse cursor
     */
    getMouseElement(event: any): {
        model: BaseModel<BaseModelListener>;
        element: Element;
    };
    fireAction(): void;
    stopFiringAction(): void;
    startFiringAction(action: BaseAction): void;
    render(): React.DOMElement<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}
