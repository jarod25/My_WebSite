import block from "../Models/block-model";

export default class BlockService {
    static async getBlocks(): Promise<any> {
        return await block.findAll();
    }

    static async getBlockById(id: number): Promise<any> {
        return await block.findByPk(id);
    }

    static async createBlock(blockData: any): Promise<any> {
        return await block.create(blockData);
    }

    static async updateBlock(id: number, blockData: any): Promise<any> {
        let updatedBlock: any = {
            block_position: blockData.block_position,
        };
        return await block.update(updatedBlock, {where: {block_id: id}});
    }

    static async deleteBlock(id: number) {
        return await block.destroy({
            where: {
                block_id: id
            }
        });
    }
}