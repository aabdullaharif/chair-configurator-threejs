import React from 'react'
import { chairColors, cushionColors } from "../constants/index"
import { useDispatch, useSelector } from 'react-redux'
import { setChairMaterial, setCushionMaterial, setLegs, setChairColor, setCushionColor} from '../redux/modelSlice';


export const Customizer = () => {

	const {chairMaterial, cushionMaterial, legs, chairColor, cushionColor} = useSelector(state=>state.modelSlice);
	const dispatch = useDispatch();

	const chairMaterialHandler = (name)=>{
		dispatch(setChairMaterial(name));
	}
	const cushionMaterialHandler = (name) =>{
		dispatch(setCushionMaterial(name));
	}
	const legsHandler = (name)=>{
		dispatch(setLegs(name));
	}
	const chairColorHandler = (name)=>{
		dispatch(setChairColor(name));
	}
	const cushionColorHandler = (name)=>{
		dispatch(setCushionColor(name));
	}

  return (
    <div className="customizer">
		<div className="congigurator__wrapper">
			<div className="configurator_section">
				<div className="configurator_section_title">Chair Material</div>
				<div className="configurator_section_values">
					<div className={`item  ${chairMaterial === 'leather' ? 'item--active' : ''}`}>
						<div className="item__label" name="leather" onClick={() => chairMaterialHandler("leather")}>
							Leather
						</div>
					</div>
					<div className={`item  ${chairMaterial === 'fabric' ? 'item--active' : ''}`}>
						<div className="item__label" name="fabric" onClick={() => chairMaterialHandler("fabric")}>
							Fabric
						</div>
					</div>
				</div>
			</div>

			<div className="configurator__section">
				<div className="configurator__section__title">Chair color</div>
					<div className="configurator__section__values">
					{chairColors.map((item, index) => (
						<div
							key={index}
							className={`item ${item.color === chairColor.color ? 'item-active' : ''}`}
						>
							<div
								className="item__dot"
								style={{ backgroundColor: item.color }}
								onClick={()=>chairColorHandler(item)}
							/>
							<div className="item__label">{item.name}</div>
						</div>
					))}
				</div>
			</div>
		</div>

		<div className="congigurator__wrapper">
			<div className="configurator_section">
				<div className="configurator_section_title">Cushion Material</div>
				<div className="configurator_section_values">
					<div className={`item ${cushionMaterial === 'leather' ? 'item--active' : ''}`}>
						<div className="item__label" onClick={()=>cushionMaterialHandler("leather")}>Leather</div>
					</div>
					<div className={`item ${cushionMaterial === 'fabric' ? 'item--active' : ''}`}>
						<div className="item__label" onClick={()=>cushionMaterialHandler("fabric")}>Fabric</div>
					</div>
				</div>
			</div>

			<div className="configurator__section">
				<div className="configurator__section__title">Cushion color</div>
					<div className="configurator__section__values">
					{cushionColors.map((item, index) => (
						<div
							key={index}
							className={`item ${item.color === cushionColor.color ? 'item-active' : ''}`}
						>
							<div
								className="item__dot"
								style={{ backgroundColor: item.color }}
								onClick={()=>cushionColorHandler(item)}
							/>
							<div className="item__label">{item.name}</div>
						</div>
					))}
				</div>
			</div>
		</div>
			
		<div className="configurator_section">
            <div className="configurator_section_title">Legs</div>
            <div className="configurator_section_values">
				<div className={`item ${legs === "modern" ? 'item--active' : ''}`}>
                    <div className="item__label" onClick={()=>legsHandler("modern")}>Modern</div>
                </div>
                <div className={`item ${legs === "classic" ? 'item--active' : ''}`}>
                    <div className="item__label" onClick={()=>legsHandler("classic")}>Classic</div>
                </div>
            </div>
        </div>

    </div>
  )
}
