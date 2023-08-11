import React from "react";
import { GiStoneBlock } from "react-icons/gi"
import { AiOutlineArrowRight } from "react-icons/ai"
export default function DataList() {

    return <div className="w-[49%] rounded-lg border border-light-gray">
        <div className="p-20 border-b border-light-gray">
            <span className="font-semibold">Latest Blocks</span>
        </div>
        <div className="p-10 pt-20 pb-20 ml-20 mr-20 flex items-center justify-between border-b border-light-gray">
            <div className="flex items-center">
                <GiStoneBlock className="text-3xl" />
                <div className="ml-10">
                    <p className="cursor-pointer text-dark-blue text-lg">123466</p>
                    <p className="text-sm text-gray">12 secs go</p>
                </div>
            </div>
            <div className="w-1/3 text-center">
                <p>
                    <span >Fee Recipient</span>
                    <span className="text-dark-blue cursor-pointer ml-4">rsync-builder</span>
                </p>
                <p className="text-sm text-gray">
                    <span className="text-dark-blue cursor-pointer">125 txns </span>
                    in 12 secs</p>
            </div>
            <div className=" border border-light-gray rounded-lg cursor-pointer text-xs font-bold p-5">
                0.04284 Eth
            </div>
        </div>
        <div className="p-10 pt-20 pb-20 ml-20 mr-20 flex items-center justify-between border-b border-light-gray">
            <div className="flex items-center">
                <GiStoneBlock className="text-3xl" />
                <div className="ml-10">
                    <p className="cursor-pointer text-dark-blue text-lg">123466</p>
                    <p className="text-sm text-gray">12 secs go</p>
                </div>
            </div>
            <div className="w-1/3 text-center">
                <p>
                    <span >Fee Recipient</span>
                    <span className="text-dark-blue cursor-pointer ml-4">rsync-builder</span>
                </p>
                <p className="text-sm text-gray">
                    <span className="text-dark-blue cursor-pointer">125 txns </span>
                    in 12 secs</p>
            </div>
            <div className=" border border-light-gray rounded-lg cursor-pointer text-xs font-bold p-5">
                0.04284 Eth
            </div>
        </div>
        <div className="p-10 pt-20 pb-20 ml-20 mr-20 flex items-center justify-between border-b border-light-gray">
            <div className="flex items-center">
                <GiStoneBlock className="text-3xl" />
                <div className="ml-10">
                    <p className="cursor-pointer text-dark-blue text-lg">123466</p>
                    <p className="text-sm text-gray">12 secs go</p>
                </div>
            </div>
            <div className="w-1/3 text-center">
                <p>
                    <span >Fee Recipient</span>
                    <span className="text-dark-blue cursor-pointer ml-4">rsync-builder</span>
                </p>
                <p className="text-sm text-gray">
                    <span className="text-dark-blue cursor-pointer">125 txns </span>
                    in 12 secs</p>
            </div>
            <div className=" border border-light-gray rounded-lg cursor-pointer text-xs font-bold p-5">
                0.04284 Eth
            </div>
        </div>
        <div className="p-10 pt-20 pb-20 ml-20 mr-20 flex items-center justify-between border-b border-light-gray">
            <div className="flex items-center">
                <GiStoneBlock className="text-3xl" />
                <div className="ml-10">
                    <p className="cursor-pointer text-dark-blue text-lg">123466</p>
                    <p className="text-sm text-gray">12 secs go</p>
                </div>
            </div>
            <div className="w-1/3 text-center">
                <p>
                    <span >Fee Recipient</span>
                    <span className="text-dark-blue cursor-pointer ml-4">rsync-builder</span>
                </p>
                <p className="text-sm text-gray">
                    <span className="text-dark-blue cursor-pointer">125 txns </span>
                    in 12 secs</p>
            </div>
            <div className=" border border-light-gray rounded-lg cursor-pointer text-xs font-bold p-5">
                0.04284 Eth
            </div>
        </div>
        <div className="p-10 pt-20 pb-20 ml-20 mr-20 flex items-center justify-between border-b border-light-gray">
            <div className="flex items-center">
                <GiStoneBlock className="text-3xl" />
                <div className="ml-10">
                    <p className="cursor-pointer text-dark-blue text-lg">123466</p>
                    <p className="text-sm text-gray">12 secs go</p>
                </div>
            </div>
            <div className="w-1/3 text-center">
                <p>
                    <span >Fee Recipient</span>
                    <span className="text-dark-blue cursor-pointer ml-4">rsync-builder</span>
                </p>
                <p className="text-sm text-gray">
                    <span className="text-dark-blue cursor-pointer">125 txns </span>
                    in 12 secs</p>
            </div>
            <div className=" border border-light-gray rounded-lg cursor-pointer text-xs font-bold p-5">
                0.04284 Eth
            </div>
        </div>
        <div className="p-10 pt-20 pb-20 ml-20 mr-20 flex items-center justify-between ">
            <div className="flex items-center">
                <GiStoneBlock className="text-3xl" />
                <div className="ml-10">
                    <p className="cursor-pointer text-dark-blue text-lg">123466</p>
                    <p className="text-sm text-gray">12 secs go</p>
                </div>
            </div>
            <div className="w-1/3 text-center">
                <p>
                    <span >Fee Recipient</span>
                    <span className="text-dark-blue cursor-pointer ml-4">rsync-builder</span>
                </p>
                <p className="text-sm text-gray">
                    <span className="text-dark-blue cursor-pointer">125 txns </span>
                    in 12 secs</p>
            </div>
            <div className=" border border-light-gray rounded-lg cursor-pointer text-xs font-bold p-5">
                0.04284 Eth
            </div>
        </div>

        <div className="h-50 w-full text-center bg-off-white flex items-center justify-center text-dark-gray hover:text-dark-blue cursor-pointer">
            <span className="text-sm">views all Blocks</span>
            <AiOutlineArrowRight className="ml-5" />
        </div>
    </div>
}