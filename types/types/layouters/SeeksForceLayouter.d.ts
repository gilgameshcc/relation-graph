import SeeksBaseLayouter from './SeeksBaseLayouter';
import { RGForceLayoutOptions, RGLayoutOptions, RGNode, RGOptionsFull } from '../types';
import { RelationGraphFinal } from "../models/RelationGraphFinal";
type CalcNode = {
    rgNode: RGNode;
    Fx: number;
    Fy: number;
    x: number;
    y: number;
    ignoreForce: boolean;
    force_weight: number;
    forceCenterOffset_X: number;
    forceCenterOffset_Y: number;
    fixed: boolean;
};
export declare class SeeksForceLayouter extends SeeksBaseLayouter {
    layoutOptions: RGForceLayoutOptions;
    fastStart: boolean;
    maxLayoutTimes: number;
    byNode: boolean;
    byLine: boolean;
    lockX: boolean;
    lockY: boolean;
    force_node_repulsion: number;
    force_line_elastic: number;
    justLayoutSingleNode: boolean;
    constructor(layoutOptions: RGLayoutOptions, graphOptions: RGOptionsFull, graphInstance: RelationGraphFinal);
    refresh(): void;
    placeNodes(allNodes: RGNode[], rootNode?: RGNode): void;
    easyPlaceGroupNodes(rootNode: RGNode): RGNode[];
    easyAnalysisNodes(rootNode: RGNode): RGNode[];
    easyPlaceRelativePosition(rootNode: RGNode, groupNodes: RGNode[]): void;
    layoutTimes: number;
    prev10: number[];
    visibleNodes: RGNode[];
    updateVisibleNodes(allNode?: RGNode[]): void;
    viewUpdate: (() => void) | undefined | false;
    autoLayout(forceLayout?: boolean): void;
    private layoutFinished;
    protected resetCalcNodes(): void;
    private calcNodeMap;
    private forCalcNodes;
    doForceLayout(useTime: number): void;
    setGraphInstance(graphInstance: RelationGraphFinal): void;
    calcNodesPosition(): void;
    stop(): void;
    addElasticByLine(node1: CalcNode, node2: CalcNode, force_elastic?: number): void;
    maxVaildLineLength: number;
    minVaildLineLength: number;
    zeroEffectNodeDistance: number;
    minNodeDistance: number;
    maxMoveSpeed: number;
    addGravityByNode(node1: CalcNode, node2: CalcNode): void;
    addFtoNode(node: CalcNode, x: number, y: number): void;
    applyToNodePosition(node: CalcNode): void;
}
export default SeeksForceLayouter;